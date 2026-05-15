const SearchBar = ({ setSearchTerm }: { setSearchTerm: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className='flex justify-center'>
      <input
        className='w-4/5 my-5 bg-zinc-600 rounded-full h-10 text-white p-4 border-zinc-700 border-2'
        type='text'
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
