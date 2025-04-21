pub struct Entry {
	pub key: String,
	pub value: i32,
}

pub struct HashTable {
	// TODO: Use Vec<Vec<Entry>> or similar
}

impl HashTable {
	pub fn new() -> Self {
		// TODO
		unimplemented!()
	}

	pub fn insert(&mut self, key: String, value: i32) {
		// TODO
	}

	pub fn get(&self, key: &str) -> Option<i32> {
		// TODO
		unimplemented!()
	}
}
