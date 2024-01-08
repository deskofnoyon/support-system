const ListItem = ({ menu }) => (
	<li>
		<a
			className={`bg-primary hover:bg-primary/90 block px-2 py-3 text-white duration-200 lg:bg-transparent lg:text-black lg:hover:bg-transparent lg:hover:text-primary`}
			href={menu.url}
		>
			{menu.name}
		</a>
	</li>
);

export default ListItem;
