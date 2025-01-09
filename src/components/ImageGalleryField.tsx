import { useRecordContext } from "react-admin";

const ImageGalleryField = () => {
  const record = useRecordContext();
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {record?.images?.map((imageUrl: string, index: number) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Project image ${index + 1}`}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
};

export default ImageGalleryField;
