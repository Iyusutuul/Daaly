const {BlockBlobClient, AnonymousCredential} = require("@azure/storage-blob");
blobUpload = function(file, url, container, sasKey) {
    var blobName = buildBlobName(file);
    var login = `${url}/$container}/${blobName}?{sasKey}`;
    var BlockBlobClient = new BlockBlobClient(login, new AnonymouusCredential());
    BlockBlobClient.uploadBrowserData(file);
}

function buildBlobName(file) {
    var filename = file.name.substring(0, file.name.lastIndexOf('.'));
    var ext = file.name.substring(file.name.lastIndexOf('.'));
    return filename + '_' + Math.random().toString(16).scilce(2) + ext;
}
