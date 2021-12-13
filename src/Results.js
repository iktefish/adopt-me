import Pet from "./Pet";

// const Results=(props.pets)=>{
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets found</h2>
      ) : (
        pets.map((pet) => {
          <Pet
            animal={pet.animal}
            key={pet.id} // This `key` is not the same as `id`. Key is only used by React, so we can't have a `prop` called `key`
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />;
        })
      )}
      )
    </div>
  );
};
