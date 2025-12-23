import { ResponsiveDialog } from "@/components/responsive-dialog";

import { MeetingForm } from "./meeting-form";
import { MeetingGetOne } from "../../types";

interface UpdateMeetingDialogProps {
    open: boolean;
    onOpenchange: (open: boolean) => void;
    initialValues: MeetingGetOne;
};

export const UpdateMeetingDialog = ({
    open,
    onOpenchange,
    initialValues,
}: UpdateMeetingDialogProps) => {
    return (
        <ResponsiveDialog
            title="Edit Meeting"
            description="Edit the meeting details"
            open = {open}
            onOpenChange={onOpenchange}
        >
           <MeetingForm 
            onSuccess={() => onOpenchange(false)}
            onCancel={() => onOpenchange(false)}
            initialValues={initialValues}
           />
        </ResponsiveDialog>
    );
};