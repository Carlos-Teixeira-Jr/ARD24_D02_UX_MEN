import { useEffect, useState } from "react";

type Category = {
  key: string;
  name: string;
  isChecked: boolean;
};

interface ISideMenu {
  handleSelectedFilters: (filter: string[]) => void
}

export function SideMenu({handleSelectedFilters}: ISideMenu) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const categories: Category[] = [
    {
      key: "outdoor",
      name: "outdoor",
      isChecked: selectedFilters.find((filter) => filter === "outdoor")
        ? true
        : false,
    },
    {
      key: "indoor",
      name: "indoor",
      isChecked: selectedFilters.find((filter) => filter === "indoor")
        ? true
        : false,
    },
    {
      key: "terracy & balcony",
      name: "terracy & balcony",
      isChecked: selectedFilters.find(
        (filter) => filter === "terracy & balcony"
      )
        ? true
        : false,
    },
    {
      key: "office desk",
      name: "office desk",
      isChecked: selectedFilters.find(
        (filter) => filter === "terracy & balcony"
      )
        ? true
        : false,
    },
  ];

  const handleCheckboxChange = (category: Category) => {
    if (selectedFilters.includes(category.key)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== category.key)
      );
    } else {
      setSelectedFilters([...selectedFilters, category.key]);
    }
  };

  useEffect(() => {
    handleSelectedFilters(selectedFilters)
  },[selectedFilters])

  return (
    <>
      <section className="w-60 border border-t-0 border-[#E2E8F0]">
        <div className="py-5 px-10 border-b border-b-[#E2E8F0]">
          <p className="text-[#475569] font-inter font-normal text-[16px]">
            Filter
          </p>
        </div>
        <div className="pl-10 pt-8 pr-5 flex flex-col gap-6">
          <h3 className="text-[#475569] font-inter font-normal text-[16px]">
            Categories
          </h3>

          <div className="flex flex-col gap-5">
            {categories.map((category) => (
              <div key={category.key} className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-7 h-7 border rounded-lg border-[#E2E8F0] cursor-pointer flex shrink-0"
                  onClick={() => handleCheckboxChange(category)}
                />
                <p className="text-[#64748B] font-inter font-normal text-[16px]">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
