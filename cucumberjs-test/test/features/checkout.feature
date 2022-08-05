Feature: Checkout

	Scenario: Checkout bananas
	Given the price of a banana is 50c
	When I checkout 2 banana
	Then the total price should be 100c




