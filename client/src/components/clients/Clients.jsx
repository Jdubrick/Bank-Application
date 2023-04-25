import React from "react";
import { clients } from "@/constants/values";

function Clients() {
  return (
    <section className="flex justify-center items-center my-4 mx-auto max-w-7xl">
      <div className="flex flex-wrap w-full justify-center items-center">
        {clients.map((client) => {
          return (
            <div
              key={client.id}
              className="flex flex-1 justify-center items-center min-w-[120px] sm:min-w-[192px] hover:-translate-y-2 cursor-pointer"
            >
              <a href={client.website} target="_blank">
                <img
                  src={client.logo}
                  alt={client}
                  className="w-[100px] sm:w-[192px] object-contain"
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Clients;
