/* eslint-disable no-unused-vars */
import React, { Fragment, useRef, useState } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import { Button, Card, CardBody, Container, Input, Label } from "reactstrap";
import { ImageCropper } from "../../../Constant";
import { Breadcrumbs } from "../../../AbstractElements";
import HeaderCard from "../../Common/Component/HeaderCard";
import { useDebounceEffect } from "./UseDebounceEffect";
import { canvasPreview } from "./CanvasPreview";

const Imagecropper = () => {
  const [imageSrc, setImageSrc] = useState("");
  const previewCanvasRef = useRef(null);
  const imageRef = useRef(null);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState(16 / 9);

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImageSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
    return centerCrop(
      makeAspectCrop({ unit: "%", width: 90 }, aspect, mediaWidth, mediaHeight),
      mediaWidth,
      mediaHeight
    );
  }
  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  function downloadCroppedImage() {
    if (completedCrop && previewCanvasRef.current) {
      const canvas = previewCanvasRef.current;
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "cropped_image.png"; // Set the filename for the downloaded image
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imageRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imageRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Image Cropper"
        parent="Bouns Ui"
        title="Image Cropper"
      />
      <Container fluid={true}>
        <Card>
          <HeaderCard title={ImageCropper} />
          <CardBody>
            <Input type="file" accept="image/*" onChange={onSelectFile} />
            <Label htmlFor="scale-input">{"Scale: "}</Label>
            <Input
              id="scale-input"
              type="number"
              step="0.1"
              value={scale}
              disabled={!imageSrc}
              onChange={(e) => setScale(Number(e.target.value))}
            />
            <Label htmlFor="rotate-input">{"Rotate: "}</Label>
            <Input
              id="rotate-input"
              type="number"
              value={rotate}
              disabled={!imageSrc}
              onChange={(e) =>
                setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
              }
              className="mb-4"
            />
           {/* ReactCrop component */}
           {!!imageSrc && (
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
            >
              <img
                ref={imageRef}
                alt="Crop me"
                src={imageSrc}
                onLoad={onImageLoad}
                className="crop-image pt-5"
              />
            </ReactCrop>
          )}
          {/* Canvas for preview */}
          <div>
            {!!completedCrop && (
              <canvas
                ref={previewCanvasRef}
                className="preview-canvas mt-5"
                style={{
                  width: completedCrop.width,
                  height: completedCrop.height,
                }}
              />
            )}
          </div>
          {/* Download button */}
          <Button
            color="primary"
            onClick={downloadCroppedImage}
            disabled={!completedCrop}
          >
            Download Cropped Image
          </Button>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Imagecropper;
