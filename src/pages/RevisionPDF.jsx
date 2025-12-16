import { useSearchParams } from "react-router-dom";
import PdfViewer from "../components/PdfViewer/PdfViewer";

export default function RevisionPDF() {
  const [searchParams] = useSearchParams();

  const outcomeParam = searchParams.get("outcome") || "";

  const outcome = outcomeParam.split(".").slice(0, 2).join("-");

  return <PdfViewer outcome={outcome} />;
}
