import { AiFillSchedule } from 'react-icons/ai'
import { FaRecordVinyl } from 'react-icons/fa'
import { TbMessages } from 'react-icons/tb'
import { AiOutlineFileDone } from 'react-icons/ai'

export const services = [
    {
        id: 1,
        name: "Create Incidents Records",
        text: "Easily create records from incidents by our users.",
        icon: <AiFillSchedule />

    },
    {
        id: 2,
        name: "Records-Alert Tracking",
        text: "Monitor various alerts that have been issued in different regions by our users.",
        icon: <AiOutlineFileDone />

    },
    {
        id: 3,
        name: "Manage Records",
        text: "Manage and verify reported records from our users.",
        icon: <FaRecordVinyl />

    },
    {
        id: 4,
        name: "Feedback",
        text: "Message Us with all your inquries about our services.",
        icon: <TbMessages />

    }
]