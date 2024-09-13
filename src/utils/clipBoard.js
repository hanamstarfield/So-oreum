const handleCopyClipBoard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('복사 성공! ' + text);
  } catch (error) {
    alert('복사 실패!');
  }
};

export default handleCopyClipBoard;