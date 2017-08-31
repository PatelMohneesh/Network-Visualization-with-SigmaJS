var i,
    s,
    N = 50,
    E = 200,
    g = {
      nodes: [],
      edges: []
    }
    //label_set= new Set();

//for (i = 0; i < N; i++){
//label_set.add(json["nodes"][i]["id"].toString());
//}
//let label_list = Array.from(label_set);
label_list = ['Java','Python','GO', 'C++', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL', 'SCALA' ]


//var colors = ["#e74c3c", "#c0392b", "#e67e22", "#f1c40f"];
var cIndex = 0;
//var labels = ["facebook","google","amazon","twosigma"]


//hash map for color of nodes according to lable. 


map = new Map(); 
map.set(label_list[0], "#e74c3c");
map.set(label_list[1], "#FFFF00");
map.set(label_list[2], "#e67e22");
map.set(label_list[3], "#f1c40f");
map.set(label_list[4], "#7FFF00");
map.set(label_list[5], "#DC143C");
map.set(label_list[6], "#008B8B");
map.set(label_list[7], "#006400");
map.set(label_list[8], "#DAA520");
map.set(label_list[9], "#FF69B4");
map.set(label_list[10], "#FF00FF");
map.set(label_list[11], "#808000");
map.set(label_list[12], "#87CEEB");
map.set(label_list[13], "#40E0D0");
map.set(label_list[14], "#c0392b");
map.set(label_list[15], "#9ACD32");

function Objectget(k) {
    console.log("Start");
    console.log(map.get(k));
    return map.get(k);
}

// Generate a random graph:
for (i = 0; i < N; i++)
  g.nodes.push({
    id: 'n' + i,
    label: label_list[cIndex = ++cIndex % label_list.length],
    x: Math.random(),
    y: Math.random(),
    size: Math.random(),
    color: Objectget(label_list[cIndex = ++cIndex % label_list.length])
  });

for (i = 0; i < E; i++)
  g.edges.push({
    id: 'e' + i,
    label: 'EDGE' + i,
    source: 'n' + (Math.random() * N | 0),
    target: 'n' + (Math.random() * N | 0),
    size: Math.random(),
    color: '#778899',
    type: [
      'line',
      'curve',
      'arrow',
      'curvedArrow',
      'dashed',
      'dotted',
      'parallel',
      'tapered'
    ][Math.round(Math.random()*8)],
    size: Math.random(),
  });

// Instantiate sigma:
s = new sigma({
  graph: g,
  renderer: {
    container: document.getElementById('network-graph'),
    type: 'canvas'
    },
    settings: {
      minNodeSize: 3,
      maxNodeSize: 10,
      labelSize: 'fixed',
      labelThreshold: 4,
      edgeLabelThreshold: 0,
      defaultLabelSize: 8,
      defaultEdgeLabelSize: 5,
      borderSize: 2,
      enableEdgeHovering: true,
      edgeHoverColor: 'edge',
      defaultEdgeHoverColor: '#000',
      edgeHoverSizeRatio: 1,
      edgeHoverExtremities: true,

  }
});




s.refresh();

s.startForceAtlas2({worker: true, barnesHutOptimize: false, slowDown: 10, gravity: 1});
setTimeout(function() {
  s.stopForceAtlas2();
}, 10000); 

// Initialize the dragNodes plugin:
var dragListener = sigma.plugins.dragNodes(s, s.renderers[0]);

dragListener.bind('startdrag', function(event) {
  console.log(event);
});
dragListener.bind('drag', function(event) {
  console.log(event);
});
dragListener.bind('drop', function(event) {
  console.log(event);
});
dragListener.bind('dragend', function(event) {
  console.log(event);
});

// Bind the events:
s.bind('overNode outNode clickNode doubleClickNode rightClickNode', function(e) {
  console.log(e.type,e.data.node, e.data.node.label, e.data.captor);
  document.getElementById("output1").innerHTML = 'Node Properties:  ID - '+ e.data.node.id  +
  ' Label - ' + e.data.node.label  +
  ' Size - ' + e.data.node.size +
  ' Color - ' + e.data.node.color; // +
  //' Node x-position - ' + e.data.node.x +
  //' Node y=position - ' + e.data.node.y;

});
s.bind('overEdge outEdge clickEdge doubleClickEdge rightClickEdge', function(e) {
  console.log(e.type, e.data.edge, e.data.captor);
  document.getElementById("output2").innerHTML =('Edge Propoerties:  ID - '+ e.data.edge.id  +
  ' Label - ' + e.data.edge.label  +
  ' Source - ' + e.data.edge.source +
  ' Target - ' + e.data.edge.target  +
  ' Size - ' + e.data.edge.size +
  ' type - ' + e.data.edge.type); // +
  //' Node x-position - ' + e.data.node.x +
  //' Node y=position - ' + e.data.node.y;


});
s.bind('clickStage', function(e) {
  console.log(e.type, e.data.captor);
});
s.bind('doubleClickStage rightClickStage', function(e) {
  console.log(e.type, e.data.captor);
});


 

