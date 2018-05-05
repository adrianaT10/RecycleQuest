export class RecyclingCenter {
	lat: number;
	long: number;
	name: string;
	address: string;
	phoneNumber: string;
	website: string;

	categories = [];
	collectionType: CollectionType;


	constructor(name, address, phoneNumber, website, lat, long) {
		this.name = name;
		this.address = address;
		this.phoneNumber = phoneNumber;
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

export enum CollectionType {
	Home="HOME",
   	AtCenter="ATCENTER",
   	Both="BOTH",
   	Partner="PARTNER"
}

