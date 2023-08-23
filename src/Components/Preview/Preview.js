import { React, useState, useEffect, useRef } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import {
  TEMPLATE_ONE,
  TEMPLATE_TWO,
  TEMPLATE_THREE,
  TEMPLATE_FOUR,
} from "../../Redux/Constant/ActionType";
import TemplateOne from "../Templates/TemplateOne";
import TemplateTwo from "../Templates/TemplateTwo";
import TemplateThree from "../Templates/TemplateThree";
import TemplateFour from "../Templates/TemplateFour";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const [templateName, setTemplateName] = useState("");
  const resumePreviewRef = useRef(null);

  useEffect(() => {
    const savedTemplateName = localStorage.getItem("templateName");
    if (savedTemplateName) {
      setTemplateName(savedTemplateName);
    }
  }, []);

  const handleTemplateName = (e) => {
    const name = e.target.value;
    setTemplateName(name);
    // save template to local storage
    localStorage.setItem("templateName", name);
  };

  // to save the PDF with the template name
  const handleSavePdf = async () => {
    const doc = new jsPDF();
    const canvas = await html2canvas(resumePreviewRef.current); //Converting it to an image using html2canvas
    const imageData = canvas.toDataURL("image/jpeg"); //change to formats
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    doc.addImage(imageData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    doc.save(`${templateName}.pdf`);
  };

  const navigate = useNavigate();

  let Template = useSelector((state) => state.Select_template);

  return (
    <div>
      <Container>
        <h1>Resume Preview</h1>
        <Grid container>
          <Grid xs={8}>
            {Template == TEMPLATE_ONE && <TemplateOne />}
            {Template == TEMPLATE_TWO && <TemplateTwo />}
            {Template == TEMPLATE_THREE && <TemplateThree />}
            {Template == TEMPLATE_FOUR && <TemplateFour />}
          </Grid>

          <Grid xs={4}>
            <h1>Create File Name</h1>
            <TextField
              label="Template Name"
              variant="outlined"
              value={templateName}
              onChange={handleTemplateName}
            ></TextField>
            <div style={{ marginTop: "15px" }}>
              <Button
                variant="outlined"
                sx={{ marginRight: "15px" }}
                onClick={() => navigate(-1)}
              >
                back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSavePdf}
              >
                Save
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Preview;
