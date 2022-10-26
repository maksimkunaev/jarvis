const title = "Shell Speech Commands";
const description = "A collection of speech commands for the Shell";
const image = "";
const url = "";

const meta = {
  title: title,
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: description },
    { name: "format-detection", content: "telephone=no" },
    { name: "title", content: title },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: url,
    },
    { property: "og:title", content: title },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },

    { property: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:url",
      content: url,
    },
    {
      property: "twitter:title",
      content: title,
    },
    {
      property: "twitter:description",
      content: description,
    },
    {
      property: "twitter:image",
      content: image,
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/speechkitt.min.js",
    },
  ],

  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/cv-landing/favicon.svg",
    },
  ],
};

export default meta;
