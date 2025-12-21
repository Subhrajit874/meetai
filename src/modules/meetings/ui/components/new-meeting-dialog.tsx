import { ResponsiveDialog } from "@/components/responsive-dialog";

import { MeetingForm } from "./meeting-form";
import { useRouter } from "next/navigation";

interface NewMeetingDialogProps {
    open: boolean;
    onOpenchange: (open: boolean) => void;
};

export const NewMeetingDialog = ({
    open,
    onOpenchange,
}: NewMeetingDialogProps) => {
    const router = useRouter();

    return (
        <ResponsiveDialog
            title="New Meeting"
            description="Create a new meeting"
            open = {open}
            onOpenChange={onOpenchange}
        >
           <MeetingForm 
            onSuccess={(id) => {
                onOpenchange(false);
                router.push(`/meetings/${id}`);
            }}
            onCancel={() => onOpenchange}
           />
        </ResponsiveDialog>
    );
};