import { useEffect, useState } from "react";

const App = () => {

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  const [sortOrder, setSortOrder] = useState("");

  const getProducts = async () => {

    try {

      const response = await fetch(
        "https://dummyjson.com/products"
      );

      const data = await response.json();

      setProducts(data.products);

      const uniqueCategories = [

        ...new Set(

          data.products.map(

            (product) =>

              product.category

          )

        )

      ];

      setCategories(uniqueCategories);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    getProducts();

  }, []);

  const handleSearchChange = (e) => {

    setSearch(

      e.target.value

    );

  };

  const handleCategoryChange = (e) => {

    setSelectedCategory(

      e.target.value

    );

  };

  const handleSortChange = (e) => {

    setSortOrder(

      e.target.value

    );

  };

  const handleReset = () => {

    setSearch("");

    setSelectedCategory("");

    setSortOrder("");

  };

  let filteredProducts = [

    ...products

  ];

  // Search

  if (search) {

    filteredProducts =

      filteredProducts.filter(

        (product) =>

          product.title

            .toLowerCase()

            .includes(

              search.toLowerCase()

            )

      );

  }

  // Category Filter

  if (selectedCategory) {

    filteredProducts =

      filteredProducts.filter(

        (product) =>

          product.category ===

          selectedCategory

      );

  }

  // Sorting

  if (sortOrder === "asc") {

    filteredProducts.sort(

      (a, b) =>

        a.price - b.price

    );

  }

  if (sortOrder === "desc") {

    filteredProducts.sort(

      (a, b) =>

        b.price - a.price

    );

  }

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">

        Product Management

      </h1>

      <div className="flex gap-3 mb-5">

        <input

          type="text"

          placeholder="Search Product"

          value={search}

          onChange={handleSearchChange}

          className="border p-2"

        />

        <select

          value={selectedCategory}

          onChange={handleCategoryChange}

          className="border p-2"

        >

          <option value="">

            All Categories

          </option>

          {

            categories.map(

              (category, index) => (

                <option

                  key={index}

                  value={category}

                >

                  {category}

                </option>

              )

            )

          }

        </select>

        <select

          value={sortOrder}

          onChange={handleSortChange}

          className="border p-2"

        >

          <option value="">

            Sort By

          </option>

          <option value="asc">

            Low To High

          </option>

          <option value="desc">

            High To Low

          </option>

        </select>

        <button

          onClick={handleReset}

          className="bg-red-500 text-white px-4 py-2 rounded"

        >

          Reset

        </button>

      </div>

      <div className="grid grid-cols-3 gap-5">

        {

          filteredProducts.map(

            (product) => (

              <div

                key={product.id}

                className="border p-4 rounded shadow"

              >

                <img

                  src={product.thumbnail}

                  alt={product.title}

                  className="w-full h-40 object-cover"

                />

                <h2 className="font-bold mt-3">

                  {product.title}

                </h2>

                <p>

                  Category :

                  {product.category}

                </p>

                <p>

                  Price :

                  ₹{product.price}

                </p>

                <p>

                  Rating :

                  {product.rating}

                </p>

              </div>

            )

          )

        }

      </div>

    </div>

  );

};

export default App;