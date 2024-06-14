// import { Box, Modal } from "@mui/material";
// import GameModal from "./GameModal";
// import WebModal from "./WebModal";

// type Props = {
//     open : boolean,
//     onClose : any,              // TODO: figure this out
//     modalDetails ?: any
// }

// const ProjectModal = ({ open, onClose, modalDetails } : Props) => {
//     const getModalContent = (modalDetails : any) => {
//         switch(modalDetails.details.type) {
//             case 'web':
//                 return <WebModal appDetails={modalDetails} />
//             case 'game':
//                 return <GameModal gameDetails={modalDetails} />
//             default:
//                 return <></>
//         }
//     }

//     return (
//         <Modal open={open} onClose={onClose}>
//             <Box sx={modalStyle}>
//                 {modalDetails ?? getModalContent(modalDetails)}
//             </Box>
//         </Modal>
//     )
// }

// export default ProjectModal;

// const modalStyle = {
//     position: 'absolute',
//     top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
//     width: '50%', height: '50%',
//     bgcolor: 'background.default',
//     border: '1px solid #383838',
//     boxShadow: 24, p: 4,
// };