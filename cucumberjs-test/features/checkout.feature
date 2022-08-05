Feature: Checkout

	Scenario: Checkout bananas
	Given the price of a banana is 40c
	When I checkout 1 banana
	Then the total price should be 40c

