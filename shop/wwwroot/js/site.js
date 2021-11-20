function confirmDelete(uniqueId, IsDeleteClicked) {
    var deletespan = 'deletespan_' + uniqueId;
    var confirmdeletespan = 'confirmdeletespan_' + uniqueId;
    if (IsDeleteClicked) {
        $('#' + deletespan).hide();
        $('#' + confirmdeletespan).show();
    } else {
        $('#' + deletespan).show();
        $('#' + confirmdeletespan).hide();
    }
}
