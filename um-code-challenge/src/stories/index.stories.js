import { storiesOf } from "@storybook/vue";
import ImageCrossfader from "../components/ImageCrossfader";

storiesOf("ImageCrossfader", module).add("default", () => ({
  components: { ImageCrossfader },
  data() {
    return {
      imageList: [
        {
          id: 0,
          alt: "Image 1",
          image:
            "https://images.ctfassets.net/7cnpidfipnrw/2lgCmXNAWDu8gVTAfOt8Al/e45f77e11ca9cd60700d0d54b5e4ee17/5-color-PLA-Blue.png?w=1324"
        },
        {
          id: 1,
          alt: "Image 2",
          image:
            "https://images.ctfassets.net/7cnpidfipnrw/25qfsB7DTB44LgYt0Ycdb4/2a9e74b362e13df6e4bba2113c3cf1eb/5-color-PLA-Magenta.png?w=1324"
        }
      ],
      selected: 0
    };
  },
  template: `<ImageCrossfader :images="imageList" :visibleImageId="selected" />`
}));
