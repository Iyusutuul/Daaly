<script>
(async function () {
  const {url, sasKey} = (await fetch("/api/credentials")).json();
  document.querySelector('#name').textContent = `SAS Key: ${sasKey}` +
   "\n" + `URL: ${url}`;
  function uploadFile() {
      const file = document.getElementById('image').files[0];
      blobUpLoad(file, url, 'image, sasKey');
  };
  const fileInput = document.getElementById('image');
  fileInput.addEventListener("change"), uploadFile);
  }())
</script>