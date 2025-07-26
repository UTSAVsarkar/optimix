import React, { ReactNode, useState } from 'react';
import ReactFlow, {
    Node,
    Edge,
    useNodesState,
    useEdgesState,
    MarkerType,
    NodeMouseHandler,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

/* ---------------------------- 1. Node Data Type ---------------------------- */
type ServiceNodeData = {
    label: ReactNode;
};

/* ------------------------ 2. Node Styles ------------------------- */
const baseNodeStyle = {
    padding: 16,
    borderRadius: 16,
    fontWeight: 600,
    background: 'linear-gradient(135deg, #1f1f1f, #2c2c2c)',
    color: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    border: '1px solid #555',
    textAlign: 'center' as const,
    transition: 'all 0.3s ease-in-out',
    fontSize: 14,
};

const highlightStyle = {
    ...baseNodeStyle,
    background: 'linear-gradient(135deg, #fb8c00, #ffb74d)',
    color: '#000',
    border: '2px solid #ffa726',
};

/* ----------------------------- 3. Nodes ----------------------------- */
const initialNodes: Node<ServiceNodeData>[] = [
    { id: '1', data: { label: 'Small Fabrication' }, position: { x: 0, y: -50 }, style: baseNodeStyle },
    { id: '2', data: { label: 'Heavy Fabrication' }, position: { x: 300, y: -50 }, style: baseNodeStyle },
    { id: '3', data: { label: 'Castings' }, position: { x: 150, y: 100 }, style: baseNodeStyle },
    { id: '4', data: { label: 'Machining' }, position: { x: 150, y: 200 }, style: baseNodeStyle },
    { id: '5', data: { label: 'Rubber' }, position: { x: 30, y: 300 }, style: baseNodeStyle },
    { id: '6', data: { label: 'Plastics' }, position: { x: 270, y: 300 }, style: baseNodeStyle },
    { id: '7', data: { label: 'Electricals' }, position: { x: 470, y: 300 }, style: baseNodeStyle },
    { id: '8', data: { label: 'Hydraulics' }, position: { x: -170, y: 300 }, style: baseNodeStyle },
    {
        id: '9',
        data: {
            label: (
                <div>
                    <strong>Auxiliary Components</strong>
                </div>
            ),
        },
        position: { x: 150, y: 420 },
        style: highlightStyle,
    },
];

/* ------------------------- 4. Edges ------------------------- */
const edgeStyle = {
    stroke: '#00e676',
    strokeWidth: 2,
};

const initialEdges: Edge[] = [
    { id: 'e1-3', source: '1', target: '3', style: edgeStyle, animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#00e676' } },
    { id: 'e2-3', source: '2', target: '3', style: edgeStyle, animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#00e676' } },
    { id: 'e3-4', source: '3', target: '4', style: edgeStyle, animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#00e676' } },
    { id: 'e4-5', source: '4', target: '5', style: edgeStyle, animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#00e676' } },
    { id: 'e4-6', source: '4', target: '6', style: edgeStyle, animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#00e676' } },
    { id: 'e5-9', source: '5', target: '9', style: edgeStyle, animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#00e676' } },
    { id: 'e6-9', source: '6', target: '9', style: edgeStyle, animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#00e676' } },
    { id: 'e7-9', source: '7', target: '9', style: edgeStyle, animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#00e676' } },
    { id: 'e8-9', source: '8', target: '9', style: edgeStyle, animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#00e676' } },
];

/* ----------------------------- 5. Main View ----------------------------- */
export default function CommodityFlow() {
    const [nodes, , onNodesChange] = useNodesState<ServiceNodeData>(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    const [open, setOpen] = useState(false);
    const [modalLabel, setModalLabel] = useState<ReactNode>(null);

    const handleNodeClick: NodeMouseHandler = (event, node) => {
        setModalLabel(node.data.label);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <div style={{ height: 800, width: '100%', borderRadius: 12, overflowX: "hidden" }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeClick={handleNodeClick}
                fitView
                panOnDrag={false}
                preventScrolling={false}
                nodesDraggable={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
            />

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        background: 'linear-gradient(135deg, #212121, #333)',
                        color: '#fff',
                        boxShadow: 8,
                        p: 2,
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        borderBottom: '1px solid #555',
                    }}
                >
                    {modalLabel}
                    <IconButton onClick={handleClose} sx={{ color: '#fff' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent
                    sx={{
                        mt: 2,
                        fontSize: 16,
                        color: '#eee',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: 100,
                    }}
                >
                    {typeof modalLabel === 'string' ? (
                        <Typography variant="h6" sx={{ color: '#ffcc80' }}>
                            {modalLabel}
                        </Typography>
                    ) : (
                        modalLabel
                    )}
                </DialogContent>
            </Dialog>

        </div>
    );
}
