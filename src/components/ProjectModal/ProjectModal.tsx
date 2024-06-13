// import { Box, Modal, useTheme } from "@mui/material";

// type Props = {
//     open : boolean,
//     onClose : any,              // TODO: figure this out
//     modalContent ?: React.ReactNode
// }

// const ProjectModal = ({ open, onClose, modalContent } : Props) => {
//     const theme = useTheme();

//     const createLink = (defaultUrl : string) => {
//         return defaultUrl + '?&bg_color=' + theme.palette.background.paper.replace('#', '') + '&fg_color=' + theme.palette.primary.contrastText.replace('#', '') + '&border_color=' + theme.palette.primary.contrastText.replace('#', '')
//     }

//     return (
//         <Modal open={open} onClose={onClose}>
//             <Box sx={modalStyle}>
//                 {modalContent}
//                 <iframe
//                     frameBorder={0}
//                     src={createLink('https://itch.io/embed/2770058')}
//                     width="550"
//                     height="165"
//                 >
//                     <a href="https://boebi-g.itch.io/pong"> Pong by Boebi_G </a>
//                 </iframe>
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