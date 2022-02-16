class Card
  attr_reader :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end
end

RSpec.describe "card" do
  before do
    @card = Card.new('Ace', 'Spades')
  end

  it 'has a ranks' do
    expect(card.rank).to eq('Ace')
  end

  it 'has a ranks' do
    expect(card.suit).to eq('Spades')
  end
end

