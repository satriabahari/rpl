"use client";

import ButtonSubmit from "@/components/ButtonSubmit";
import ManageHeading from "@/components/ManageHeading";
import { createData } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddLibrary = () => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publisher, setPublisher] = useState("");
  const [image, setImage] = useState("");
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsMutating(true);
    try {
      await createData("/libraries", {
        isbn,
        title,
        description,
        publisher,
        image,
      });
      toast.success("Data added successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsMutating(false);

      setTimeout(() => {
        router.push("/admin/library");
        router.refresh();
      }, 2000);
    } catch (error) {
      toast.error("Error adding data", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsMutating(false);
    }
  };

  return (
    <section className="grid grid-rows-[10%_auto] p-4 pt-[4.6rem]">
      <ManageHeading table="Library" />

      <div className="mt-4 grid grid-rows-[1fr_6fr] rounded-lg bg-gray-50 px-8 py-4 dark:bg-gray-700 md:-mb-[5rem] md:grid-rows-[1fr_4fr] md:px-16 md:py-8">
        <h3 className="mb-4 text-center text-3xl font-medium text-gray-700 dark:text-gray-50">
          Add Library
        </h3>

        <form
          className="flex flex-col gap-3 md:grid md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              ISBN
            </label>
            <input
              type="text"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="ISBN"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Title
            </label>
            <input
              type="text"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Publisher
            </label>
            <input
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Publisher"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Image
            </label>
            <input
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Description
            </label>
            <textarea
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <ButtonSubmit isMutating={isMutating} text="Submit" />
            <button className="rounded-sm border border-gray-500 bg-gray-50 px-6 py-2 text-blue-500">
              <Link href="/admin/library">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={1000} />
    </section>
  );
};

export default AddLibrary;
