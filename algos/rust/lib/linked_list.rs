pub struct Node {
	pub value: i32,
	pub next: Option<Box<Node>>,
}

pub struct LinkedList {
	pub head: Option<Box<Node>>,
}

impl LinkedList {
	pub fn new() -> Self {
		// TODO
		unimplemented!()
	}

	pub fn push_front(&mut self, value: i32) {
		// TODO
	}

	pub fn pop_front(&mut self) -> Option<i32> {
		// TODO
		unimplemented!()
	}

	pub fn print(&self) {
		// Optional helper: print elements
	}
}
