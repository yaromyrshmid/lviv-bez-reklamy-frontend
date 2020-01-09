import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginImageResize,
  FilePondPluginFileEncode
);

const FilePondImage = ({ setimages }) => {
  return (
    <div>
      <FilePond
        onupdatefiles={fileItems => {
          // Set current file objects to this.state
          setimages(document.getElementsByName("filepond")[0].value);
        }}
        // files={images}
        acceptedFileTypes={["image/*"]}
        imageResizeTargetWidth={600}
        instantUpload={false}
        labelIdle={
          'Перетягніть фото або <span class="filepond--label-action">Оберіть</span>'
        }
        labelInvalidField={"Неправильний тип файлу"}
        labelFileLoading={"Завантаження"}
        labelFileLoadError={"Помилка під час завантаження"}
      />
    </div>
  );
};

export default FilePondImage;
