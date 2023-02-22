export interface menuItemsInterface {
	itemName: string;
	routerLink: string;
	activeOptions?: Object;
}

export interface Object {
	exact: boolean;
}

export const menuItems: menuItemsInterface[] = [
	{
		itemName: "Home",
		routerLink: "/ ",
		activeOptions: { exact: true }
	},
	{
		itemName: "Themes",
		routerLink: "/ "
	},
	{
		itemName: "Info",
		routerLink: "/ "
	},
	{
		itemName: "Contact us",
		routerLink: "/ "
	},
	{
		itemName: "Talks list",
		routerLink: "/talks"
	},
	{
		itemName: "Mentee page",
		routerLink: "/mentee-page"
	}
];
