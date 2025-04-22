use std::f32::INFINITY;

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
		let new_node: Box<ListNode> = Box::new(ListNode { value, next: self.head.take() });

			self.head = Some(new_node);
		
	}
	

	pub fn size(&self) -> usize {
		let mut n:usize = 0;
		let mut current:Option<&Box<ListNode>> = self.head.as_ref();

		while let Some(node) = current {
			n += 1;
			current = node.next.as_ref();
		}

		n
	}
	

	pub fn sum(&self) -> i32 {
		let mut sum:i32 = 0;
		let mut current:Option<&Box<ListNode>> = self.head.as_ref();

		while let Some(node) = current {
			sum += node.value;
			current = node.next.as_ref();
		}

		sum
	}
	

	pub fn mul(&self) -> i32 {
		let mut mul:i32 = 1;
		let mut current:Option<&Box<ListNode>> = self.head.as_ref();

		while let Some(node) = current {
			mul *= node.value;
			current = node.next.as_ref();
		}

		mul
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
		self.head= None;
	}

	pub fn find(&self, value: i32) -> bool {
		let mut current = self.head.as_ref();
		while let Some(node) = current {
			if (node.value == value){
				return true;
			}
			current = node.next.as_ref();
		}
	
		false
	}
	

	pub fn average(&self) -> Option<f64> {
		if self.size() > 0 {return Some(self.average().unwrap() / self.size() as f64)}
		return None
	}

	pub fn min(&self) -> Option<i32> {
		if Some(self.head.as_ref()).is_none(){ return None}
		let mut current = self.head.as_ref();
		let mut n:i32 = INFINITY as i32; 
		while let Some(node) = current {
			if (node.value < n){
				n = node.value
			}
			current = node.next.as_ref();
		}
	
		Some(n)
	}
	

	pub fn max(&self) -> Option<i32> {
		if Some(self.head.as_ref()).is_none(){ return None}
		let mut current = self.head.as_ref();
		let mut n:i32 = -INFINITY as i32; 
		while let Some(node) = current {
			if (node.value > n){
				n = node.value
			}
			current = node.next.as_ref();
		}
	
		Some(n)
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
		assert_eq!(list.mul(), 6000);
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
