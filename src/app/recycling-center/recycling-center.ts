export class RecyclingCenter {
	lat: number;
	long: number;
	name: string;
	address: string;
	phone: string;
	website: string;

	materials: string;


	constructor(name, address, phoneNumber, website, lat, long) {
		this.name = name;
		this.address = address;
		this.phone = phoneNumber;
		this.website = website;
		this.lat = lat;
		this.long = long;
	}
}

export enum Material {
	Paper="Hartie",
	Glass="Sticla",
	Oil="Ulei",
	Wood="Lemn",
	Plastic="Plastic",
	Metal="Metal",
	Electronics="Electronice"
}


