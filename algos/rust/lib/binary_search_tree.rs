pub struct TreeNode {
	pub value: i32,
	pub left: Option<Box<TreeNode>>,
	pub right: Option<Box<TreeNode>>,
}

pub struct BinarySearchTree {
	pub root: Option<Box<TreeNode>>,
}

impl BinarySearchTree {
	pub fn new() -> Self {
		// TODO
		unimplemented!()
	}

	pub fn insert(&mut self, value: i32) {
		// TODO
	}

	pub fn search(&self, value: i32) -> bool {
		// TODO
		unimplemented!()
	}
}
