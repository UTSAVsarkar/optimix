import React, { useEffect, useState } from "react";
import ReactFlow, {
  Node,
  Edge,
  Position,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

const RoadmapFlow = () => {
  const milestones = [
    { label: "Component Localization for Excavators", color: "#d74f28" },
    { label: "Supply Chain Cost Optimization Project", color: "#1abc9c" },
    { label: "Plant Layout & NPD Material Flow Design", color: "#5a54c5" },
    { label: "Aftermarket Spare Parts Setup", color: "#f4a02b" },
    { label: "AI-Based Procurement & CSR Analytics Tool", color: "#e41c7c" },
  ];

  const spacingY = 180;
  const offsetX = 100;
  const nodeWidth = 260;
  const nodeHeight = 100;

  const [canvasWidth, setCanvasWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setCanvasWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = canvasWidth <= 768;
  const centerX = canvasWidth / 2 - nodeWidth / 2;

  const nodes: Node[] = milestones.map((m, i) => {
    const isLeft = i % 2 === 0;
    const x = isMobile
      ? centerX
      : centerX + (isLeft ? -offsetX : offsetX);

    return {
      id: `node-${i}`,
      data: { label: m.label },
      position: {
        x,
        y: i * spacingY,
      },
      draggable: false,
      width: nodeWidth,
      height: nodeHeight,
      style: {
        background: m.color,
        color: "#fff",
        borderRadius: 12,
        fontWeight: "bold",
        padding: 10,
        whiteSpace: "pre-line",
        width: nodeWidth,
        height: nodeHeight,
        textAlign: "center",
        pointerEvents: "none",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        alignContent: 'center',
        fontSize: 15
      },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    };
  });

  const edges: Edge[] = milestones.slice(1).map((_, i) => ({
    id: `edge-${i}`,
    source: `node-${i}`,
    target: `node-${i + 1}`,
    type: "smoothstep",
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: milestones[i].color,
      pointerEvents: "none",
    },
  }));

  return (
    <ReactFlowProvider>
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <div
          style={{
            width: canvasWidth,
            height: milestones.length * spacingY + 200,
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            panOnScroll={false}
            panOnDrag={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            elementsSelectable={false}
            nodesDraggable={false}
            nodesConnectable={false}
            nodesFocusable={false}
            preventScrolling={false}
          />
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default RoadmapFlow;
