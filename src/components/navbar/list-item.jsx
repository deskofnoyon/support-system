const ListItem = ({ menu }) => (
	<li>
		<a
			className={`hover:bg-primary hover:text-white block px-2 py-3 duration-200 lg:bg-transparent lg:text-black lg:hover:bg-transparent lg:hover:text-primary`}
			href={menu.url}
		>
			{menu.name}
		</a>
	</li>
);

export default ListItem;
