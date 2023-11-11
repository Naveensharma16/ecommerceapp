import { createServer, Model } from "miragejs";
import snakeplant from "../assets/snake-plant.png";
import monsteradeliciosa from "../assets/monstera-deliciosa.png";
import fiddleleaf from "../assets/fiddle-leaf-fig-plant.png";
import pothos from "../assets/pothos.png";
import peacelily from "../assets/peace-lily.png";
import alovera from "../assets/aloe-vera.png";
import lavender from "../assets/lavender-plant.png";
import basil from "../assets/basil-herb.png";
import rosemary from "../assets/rosemary-plant.png";
import mint from "../assets/mint.png";
import ceramic from "../assets/ceramic-flower-pot.png";
import clay from "../assets/claypot.png";
import plantbasket from "../assets/plantbasket.png";
import gardenurn from "../assets/gardenurn.png";
import plantstand from "../assets/plantstand.png";

const plants = [
  {
    id: "9a28d4d5-942f-457c-9a49-e38bfe458f9e",
    name: "Monstera Deliciosa",
    image: monsteradeliciosa,
    price: 30,
    description:
      "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a popular houseplant with large, glossy leaves.",
    category: "Indoor Plants",
    quantity: 10,
    featured: true,
  },
  {
    id: "3c90e5ea-0cb4-49b4-aa2a-d03f6e866306",
    name: "Fiddle Leaf Fig",
    image: fiddleleaf,
    price: 40,
    description:
      "The Fiddle Leaf Fig is a trendy indoor plant with large, violin-shaped leaves that add a touch of elegance to any room.",
    category: "Indoor Plants",
    quantity: 5,
    featured: true,
  },
  {
    id: "6215788b-4321-4c93-957b-f691966ccab7",
    name: "Snake Plant",
    image: snakeplant,
    price: 20,
    description:
      "The Snake Plant, also known as Mother-in-Law's Tongue, is a low-maintenance houseplant that can thrive in various lighting conditions.",
    category: "Indoor Plants",
    quantity: 15,
    featured: true,
  },
  {
    id: "e3f0c6ba-7f46-4353-8175-66e8ceb69fc0",
    name: "Pothos",
    image: pothos,
    price: 15,
    description:
      "Pothos is a popular trailing vine plant that is perfect for hanging baskets or climbing up trellises.",
    category: "Indoor Plants",
    quantity: 8,
    featured: true,
  },
  {
    id: "5d203ec1-21a4-4932-b4b9-1b8d25ff7f6d",
    name: "Peace Lily",
    image: peacelily,
    price: 25,
    description:
      "The Peace Lily is a beautiful flowering plant that thrives in low-light conditions and helps purify the air.",
    category: "Indoor Plants",
    quantity: 12,
    featured: false,
  },
  {
    id: "d132924c-84e9-41be-89f7-eb7c0f7f7ccc",
    name: "Aloe Vera",
    image: alovera,
    price: 10,
    description:
      "Aloe Vera is a succulent plant known for its healing properties and ability to survive in dry conditions.",
    category: "Indoor Plants",
    quantity: 20,
    featured: false,
  },
  {
    id: "795ec6d2-1582-4a01-94b3-0c96523b231f",
    name: "Lavender",
    image: lavender,
    price: 8,
    description:
      "Lavender is a fragrant herb that is often used for its calming effects and can also be grown as a decorative plant.",
    category: "Herbs",
    quantity: 18,
    featured: false,
  },
  {
    id: "11ccd485-ddf3-48e2-967f-1d387f5b3949",
    name: "Basil",
    image: basil,
    price: 6,
    description:
      "Basil is a popular culinary herb that adds a fresh and aromatic flavor to various dishes.",
    category: "Herbs",
    quantity: 25,
    featured: true,
  },
  {
    id: "c8ed0a30-05f5-4526-9661-5d67dbdf5f67",
    name: "Rosemary",
    image: rosemary,
    price: 7,
    description:
      "Rosemary is an evergreen herb with fragrant needle-like leaves that are commonly used in Mediterranean cuisine.",
    category: "Herbs",
    quantity: 30,
    featured: false,
  },
  {
    id: "41013908-068d-41b7-8622-bf58edd4ede7",
    name: "Mint",
    image: mint,
    price: 5,
    description:
      "Mint is a versatile herb with a refreshing flavor that is often used in teas, cocktails, and desserts.",
    category: "Herbs",
    quantity: 15,
    featured: false,
  },
  {
    id: "56013908-068d-41b7-8622-bf58eew4edd7",
    name: "Clay Plant Pot",
    image: clay,
    price: 12,
    description:
      "Handcrafted clay pot for indoor plants, enhances the beauty of your greens.",
    category: "Pots",
    quantity: 15,
    featured: false,
  },
  {
    id: "w2qd0a30-05f5-4526-9661-5d67dsdf5f89",
    name: "Ceramic Flower Pot",
    image: ceramic,
    price: 18,
    description:
      "Elegant ceramic pot for flowers and small plants, a perfect addition to your garden.",
    category: "Pots",
    quantity: 15,
    featured: true,
  },
  {
    id: "opxd0a30-05f5-4526-9661-5d45dsdf5p69",
    name: "Hanging Planter Basket",
    image: plantbasket,
    price: 25,
    description:
      "Decorative hanging basket for trailing plants, suitable for both indoor and outdoor use.",
    category: "Pots",
    quantity: 15,
    featured: true,
  },
  {
    id: "45rd0a30-05f5-4526-8961-5d45dsdf5p69",
    name: "Decorative Garden Urn",
    image: gardenurn,
    price: 30,
    description:
      "Classical garden urn, ideal for large plants, statues, or flower arrangements.",
    category: "Pots",
    quantity: 15,
    featured: false,
  },
  {
    id: "342d0x30-05f5-4526-8961-5d45dsdf6769",
    name: "Modern Plant Stand",
    image: plantstand,
    price: 22,
    description:
      "Sleek and modern plant stand, suitable for showcasing your favorite potted plants.",
    category: "Pots",
    quantity: 15,
    featured: true,
  },
];

export function Server({ environment = "development" } = {}) {
  const server = createServer({
    models: {
      plant: Model,
    },

    seeds(server) {
      plants.forEach((plant) => {
        server.create("plant", plant);
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/products", (schema, request) => {
        // return schema.plants.all();

        const { category, price } = request.queryParams;

        let filteredPlants = schema.plants.all();

        if (category) {
          filteredPlants = filteredPlants.filter(
            (plant) => plant.category.toUpperCase() === category.toUpperCase()
          );
        }

        if (price === "rate-high") {
          filteredPlants = filteredPlants.sort((a, b) => b.price - a.price);
        } else if (price === "rate-low") {
          filteredPlants = filteredPlants.sort((a, b) => a.price - b.price);
        }

        return filteredPlants;
      });

      this.get("/products/:id", (schema, request) => {
        const id = request.params.id;
        const singleproduct = schema.plants.find(id);
        return singleproduct.attrs;
      });

      this.post("/products/:id/purchase", (schema, request) => {
        const { productIds } = JSON.parse(request.requestBody);
        const purchasedPlants = [];

        productIds.forEach((id) => {
          const plant = schema.plants.find(id);

          if (plant.quantity > 0) {
            plant.update({ quantity: plant.quantity - 1 });
            purchasedPlants.push(plant);
          }
        });
      });

      this.get("/products/featured", (schema, request) => {
        return schema.plants.where({ featured: true });
      });
    },
  });

  return server;
}
