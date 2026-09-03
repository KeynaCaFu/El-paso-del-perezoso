import {
  cabinPhotos,
  plantaAltaPhotos,
  plantaBajaPhotos,
  galleryImages,
} from "@/lib/images";

function Lightbox({ modalId, carouselId, images }) {
  return (
    <div className="modal fade" id={modalId} tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="modal-body p-0 position-relative">
            <div
              id={carouselId}
              className="carousel slide"
              data-bs-ride="false"
              data-bs-keyboard="true"
            >
              <div className="carousel-inner">
                {images.map((src, i) => (
                  <div
                    key={i}
                    className={`carousel-item${i === 0 ? " active" : ""}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      className="d-block w-100 zoomable"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Lightboxes() {
  return (
    <>
      <Lightbox
        modalId="modalPlantaAlta"
        carouselId="lightboxPlantaAlta"
        images={plantaAltaPhotos}
      />
      <Lightbox
        modalId="modalPlantaBaja"
        carouselId="lightboxPlantaBaja"
        images={plantaBajaPhotos}
      />
      <Lightbox
        modalId="modalGaleria"
        carouselId="lightboxGaleria"
        images={galleryImages.map((g) => g.src)}
      />
      <Lightbox
        modalId="modalCabinPhotos"
        carouselId="lightboxCabinPhotos"
        images={cabinPhotos}
      />
    </>
  );
}
