import unittest
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, val in enumerate(nums):
            for j in range(i + 1, len(nums)):
                if val + nums[j] == target:
                    return [i, j]
        return []

class TestSolution(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_example_case(self):
        self.assertEqual(self.solution.twoSum([2, 7, 11, 15], 9), [0, 1])

    def test_no_solution(self):
        self.assertEqual(self.solution.twoSum([1, 2, 3], 10), [])

    def test_multiple_pairs_error(self):
        self.assertEqual(self.solution.twoSum([3, 2, 4], 6), [1, 2])

if __name__ == "__main__":
    unittest.main()
