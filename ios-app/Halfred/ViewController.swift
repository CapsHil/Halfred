//
//  ViewController.swift
//  Halfred
//
//  Created by Pierre RABY on 01/03/16.
//  Copyright © 2016 Pierre RABY. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let button   = UIButton(type: UIButtonType.System) as UIButton
        button.frame = CGRectMake(100, 300, 100, 50)
        button.backgroundColor = UIColor.blackColor()
        button.setTitle("SWITCH OFF - 4", forState: UIControlState.Normal)
        button.addTarget(self, action: "buttonAction:", forControlEvents: UIControlEvents.TouchUpInside)
        
        let buttonOn   = UIButton(type: UIButtonType.System) as UIButton
        buttonOn.frame = CGRectMake(100, 100, 100, 50)
        buttonOn.backgroundColor = UIColor.blackColor()
        buttonOn.setTitle("SWITCH ON - 4", forState: UIControlState.Normal)
        buttonOn.addTarget(self, action: "buttonActionOn:", forControlEvents: UIControlEvents.TouchUpInside)
        
        self.view.addSubview(button)
        self.view.addSubview(buttonOn)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func buttonAction(sender:UIButton!) {
        var client:TCPClient = TCPClient(addr: "192.168.1.26", port: 9632)
        var (success, errmsg) = client.connect(timeout: 1)
        if success {
            var (success, errmsg) = client.send(str:"switchOff_4" )
            if success {
                        print("Envoi reussi")
            }else {
                print(errmsg)
            }
        } else {
            print(errmsg)
        }
        client.close()
    }
    
    func buttonActionOn(sender:UIButton!) {
        var client:TCPClient = TCPClient(addr: "192.168.1.26", port: 9632)
        var (success, errmsg) = client.connect(timeout: 1)
        if success {
            var (success, errmsg) = client.send(str:"switchOn_4" )
            if success {
                print("Envoi reussi")
            }else {
                print(errmsg)
            }
        } else {
            print(errmsg)
        }
        client.close()
    }
}

