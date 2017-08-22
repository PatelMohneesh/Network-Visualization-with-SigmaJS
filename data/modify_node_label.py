#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Aug  2 11:30:38 2017

@author: Mohneesh
"""

import json
import os

#Considering the same format of the data as provided by "Benjie", network_temp.json

filename = 'network_temp.json'
with open(filename, 'r') as f:
    data = json.load(f)
    

# data = original data we revieve from the Rest API's    
#print (data)
    
#edge_data = data['edges']
node_data = data['nodes']

#print(node_data)
mod_node_list = []
for mydict in node_data:
    mydict['type'] = mydict['label'] #Grapg_db 'lable' = 'type' for UI
    mydict['label'] = mydict['id']
    mod_node_list.append(mydict)
    
print (mod_node_list)