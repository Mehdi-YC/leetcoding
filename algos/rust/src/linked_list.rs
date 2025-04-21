#[derive(Debug)]
struct ListNode {
	value: i32,
	next: Option<Box<ListNode>>,
}

#[derive(Debug)]
struct LinkedList {
	head: Option<Box<ListNode>>,
}

impl LinkedList {
	pub fn new() -> Self {
		// TODO
		Self { head: None }
	}

	pub fn append(&mut self, value: i32) {
		let new_node: Box<ListNode> = Box::new(ListNode { value, next: None });
		if let Some(ref mut head) = self.head {
			let mut current = head;
			while let Some(ref mut next_node) = current.next{
				current = next_node;
			}
			current.next = Some(new_node);

		}
		else{
			// in case it was empty
			self.head = Some(new_node);
		}
	}

	pub fn prepend(&mut self, value: i32) {
		// TODO
		unimplemented!()
	}

	pub fn size(&self) -> usize {
		// TODO
		unimplemented!()
	}

	pub fn sum(&self) -> i32 {
		// TODO
		unimplemented!()
	}

	pub fn mul(&self) -> Option<i32> {
		// TODO
		unimplemented!()
	}

	pub fn values(&self) -> Vec<i32> {
		let mut rv = vec![];
		let mut current = self.head.as_ref();
	
		while let Some(node) = current {
			rv.push(node.value);
			current = node.next.as_ref();
		}
	
		rv
	}

	pub fn delete(&mut self, value: i32) -> bool {
		// TODO
		unimplemented!()
	}

	pub fn clear(&mut self) {
		// TODO
		unimplemented!()
	}

	pub fn find(&self, value: i32) -> bool {
		// TODO
		unimplemented!()
	}

	pub fn average(&self) -> Option<f64> {
		// TODO
		unimplemented!()
	}

	pub fn min(&self) -> Option<i32> {
		// TODO
		unimplemented!()
	}

	pub fn max(&self) -> Option<i32> {
		// TODO
		unimplemented!()
	}
}

#[cfg(test)]
mod tests {
	use super::*;

	fn setup_list() -> LinkedList {
		let mut list = LinkedList::new();
		list.append(10);
		list.append(20);
		list.append(30);
	
		list
	}

	#[test]
	fn test_append() {
		let list = setup_list();
		assert_eq!(list.values(), vec![10, 20, 30]);
	}

	#[test]
	fn test_prepend() {
		let mut list = setup_list();
		list.prepend(5);
		assert_eq!(list.values(), vec![5, 10, 20, 30]);
	}

	#[test]
	fn test_size() {
		let list = setup_list();
		assert_eq!(list.size(), 3);
	}

	#[test]
	fn test_sum() {
		let list = setup_list();
		assert_eq!(list.sum(), 60);
	}

	#[test]
	fn test_mul() {
		let list = setup_list();
		assert_eq!(list.mul(), Some(6000));
	}

	#[test]
	fn test_values() {
		let list = setup_list();
		assert_eq!(list.values(), vec![10, 20, 30]);
	}

	#[test]
	fn test_delete() {
		let mut list = setup_list();
		let deleted = list.delete(20);
		assert!(deleted);
		assert_eq!(list.values(), vec![10, 30]);

		let not_deleted = list.delete(99);
		assert!(!not_deleted);
	}

	#[test]
	fn test_clear() {
		let mut list = setup_list();
		list.clear();
		assert_eq!(list.size(), 0);
		assert_eq!(list.values(), vec![]);
	}

	#[test]
	fn test_find() {
		let list = setup_list();
		assert!(list.find(20));
		assert!(!list.find(99));
	}

	#[test]
	fn test_average() {
		let list = setup_list();
		assert_eq!(list.average(), Some(20.0));
	}

	#[test]
	fn test_min() {
		let list = setup_list();
		assert_eq!(list.min(), Some(10));
	}

	#[test]
	fn test_max() {
		let list = setup_list();
		assert_eq!(list.max(), Some(30));
	}
}
