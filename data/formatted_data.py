#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Aug  1 14:46:24 2017

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
    
edge_data = data['edges']
node_data = data['nodes']

#Modifying Nodes Data
def ModNodesData(data):
    for mydict in data:
        mydict['type'] = mydict['label'] #Grapg_db 'lable' = 'type' for UI
        mydict['label'] = mydict['id']
        return mydict

#NO Need to Modify Edge Data as it's in the required format form Graphdb Rest API's

#Extracting Nodes out of Edges from Edge File 

Mod_Node = ModNodesData(node_data)

print(edge_data)





node_list = []
for mydict in edge_data:
    print (mydict)
            
    
    
    
    
    #nodes = {}
    #for i in mydict:
        #nodes['id'] = i['source']
        #nodes['label'] = i['source']
        #print (nodes)
    
    
    