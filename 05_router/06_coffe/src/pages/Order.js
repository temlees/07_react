
export const Order = ({ cart }) => {
    return (
      <div>
        <h2>주문 확인</h2>
        {cart.length > 0 ? (<ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}원
              </li>
            ))}
          </ul>
        ) : (
          <p>선택한 커피가 없습니다.</p>
        )}
      </div>
    );
  };