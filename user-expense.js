import * as DB from 'db-operations';

class UserExpense {
  // Create a random 16 digit card number
  addCard(user_id, options) {
    // query

    const { id } = DB.findOne(user_id);

    if (id) {
      throw new Error('User already has a card available');
    }

    DB.create({
      id: user_id,
      card_number: '16 digit card',
    });
  }

  debitMoney(user_id, amount) {
    const { id, limit, current } = DB.findOne(user_id);

    if (amount + current > limit) {
      throw new Error(
        'Card Limit Exceeded: Cannot make purchase as amount is more than current available limit',
      );
    }

    DB.update(
      {
        current: current + amount,
      },
      { id: user_id },
    );
  }
}
