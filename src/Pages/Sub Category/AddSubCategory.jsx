import React from "react";
import Sidebar from "../../common/Sidebar";
import Header from "../../common/Header";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";

export default function AddSubCategory() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-[16.5%_auto]">
        <div>
          <Sidebar />
        </div>
        <div>
          <Header />
          <Breadcrumb
            path={"Sub Category"}
            path2={"Add Sub Category"}
            slash={"/"}
          />
          <div className="w-full h-[610px]">
            <div className="max-w-[1220px] mx-auto py-5">
              <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                Add Sub Category
              </h3>
              <div className="border border-t-0 p-3 rounded-b-md border-slate-400">
                <div class="mb-5">
                  <label
                    for="base-input"
                    class="block mb-5 text-md font-medium text-gray-900"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Category Name"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="base-input"
                    class="block mb-5 text-md font-medium text-gray-900"
                  >
                    Parent Category Name
                  </label>

                  <select
                    id="default"
                    class=" border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  >
                    <option selected>--Select Category--</option>
                    <option value="Mens">Men's</option>
                    <option value="Women">Women</option>
                    <option value="Sale">Sale</option>
                  </select>
                </div>
                <div class="mb-5">
                  <label
                    for="base-input"
                    class="block mb-5 text-md font-medium text-gray-900"
                  >
                    Category Image
                  </label>
                  <form class="max-w-full">
                    <label for="file-input" class="sr-only">
                      Choose file
                    </label>
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    "
                      multiple
                    />
                  </form>
                </div>
                <div class="mb-5">
                  <label
                    for="base-input"
                    class="block mb-5 text-md font-medium text-gray-900"
                  >
                    Category Description
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    class=" resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Add Product Description....."
                  ></textarea>
                </div>
                <div className="pe-5 ps-1">
                  <span className="flex items-center gap-3">
                    Status :
                    <input
                      id="link-radio"
                      type="radio"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                    ></input>
                    Active
                    <input
                      id="link-radio"
                      type="radio"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                    ></input>
                    Deactive
                  </span>
                </div>
                <button
                  type="button"
                  class="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Add Category
                </button>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </section>
  );
}