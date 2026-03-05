export const closeDialog = (dialogId:string) => {
  const dialog = document.getElementById(dialogId) as HTMLDialogElement

  dialog.hidePopover()
} 