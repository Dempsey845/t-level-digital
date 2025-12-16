export default function PdfViewer({ outcome }) {
  return (
    <iframe
      src={`/revision/${outcome}.pdf`}
      width="100%"
      height="1000px"
      style={{ border: "none" }}
      title="PDF Viewer"
    />
  );
}
