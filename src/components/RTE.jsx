import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { plugin } from "postcss";
import { Controller } from "react-hook-form";

function RTE({ name, control, defaultValue = "", label }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue="{defaultValue}"
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
                'emoticons template paste textpattern'
              ],
              toolbar: 'undo redo | formatselect | bold italic strikethrough forecolor backcolor | \
              link image media | alignleft aligncenter alignright alignjustify | \
              numlist bullist outdent indent | removeformat | addcomment \
              pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
