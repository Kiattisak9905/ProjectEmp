import { MdMail, MdForwardToInbox } from 'react-icons/md'

export const pages = [
  { name: 'User', icon: <MdMail />, role: 'admin', type: 'SERVICE' },
  { name: 'Employee', icon: <MdMail />, role: 'user', type: 'SERVICE' },
  { name: 'Application', icon: <MdMail />, role: 'user', type: 'SERVICE' },
  { name: 'Work', icon: <MdMail />, role: 'user', type: 'SERVICE' },
  { name: 'Report', icon: <MdMail />, role: 'user', type: 'SERVICE' },

  { name: 'Setting', icon: <MdMail />, role: 'user', type: 'OTHER' },
  { name: 'Support', icon: <MdMail />, role: 'user', type: 'OTHER' },
]
