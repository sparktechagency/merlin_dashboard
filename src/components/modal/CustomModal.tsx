"use client";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Dispatch, ReactNode, SetStateAction } from "react";


interface CustomModalProps {
    open: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
    className?: string;
    maxWidth?: string;
    bgColor?: string;
}

export default function CustomModal({ open, setIsOpen, children, className, maxWidth,bgColor }: CustomModalProps) {

    const isHalfScreen = className?.includes("max-h-[30vh]");
    const maxHeightClass = isHalfScreen ? "overflow-y-scroll max-h-screen" : "";

    return (
        <Dialog open={open} onOpenChange={setIsOpen} >
            <DialogTrigger asChild />
            <DialogContent
                className={cn(
                    `sm:max-w-[425px]   border-none rounded-2xl ${bgColor}`,
                    maxWidth,
                    className?.replace(/max-h-\[[^\]]+\]/g, ""),
                    maxHeightClass

                )}
                onOpenAutoFocus={(e) => {
                    e.preventDefault(); // default cancel focus off
                    document.getElementById("deleteBtn")?.focus();
                }}
            // showCloseButton={false} // CORSE ICON COLOR REMOVED
            >

                <DialogTitle className="hidden"></DialogTitle>
                <DialogDescription className=" hidden"></DialogDescription>
                {children}
            </DialogContent>
        </Dialog>
    );
}